"""empty message

Revision ID: 28d3e6fd2ba7
Revises: 
Create Date: 2024-03-05 19:31:26.048612

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '28d3e6fd2ba7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('departments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=250), nullable=False),
    sa.Column('department_museum_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('exhibits',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('exhibit_museum_id', sa.Integer(), nullable=False),
    sa.Column('exhibit_name', sa.String(length=300), nullable=False),
    sa.Column('department_museum_id', sa.Integer(), nullable=True),
    sa.Column('primary_image_small', sa.String(length=250), nullable=False),
    sa.Column('region', sa.String(length=100), nullable=True),
    sa.Column('culture', sa.String(length=100), nullable=True),
    sa.Column('object_date', sa.String(length=100), nullable=True),
    sa.Column('artist_name', sa.String(length=250), nullable=True),
    sa.ForeignKeyConstraint(['department_museum_id'], ['departments.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('exhibits')
    op.drop_table('user')
    op.drop_table('departments')
    # ### end Alembic commands ###
